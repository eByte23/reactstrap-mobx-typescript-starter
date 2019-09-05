import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
export default class AudioEl extends Component<{}> {

    @observable inputField: string = "";
    @observable audioFiles: string[] = [];

    audioStream: HTMLAudioElement | null = null;


    render() {


        return (
            <div>
                <Jumbotron fluid={false}>
                    <Container>
                        <h3>Audio</h3>

                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size={3}>
                            <audio ref={(ref) => this.audioStream = ref} controls />
                        </Col>
                        <Col size={3}>
                            <input onChange={(e) => this.setInputFiled(e.target.value)} value={this.inputField} /> {' '}
                            <Button color="primary" onClick={() => this.addAudioFile()} >Add</Button>
                        </Col>
                        <Col size={3}>
                            <div>

                                {
                                    this.audioFiles.map(x => <div>{x}</div>)
                                }
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

    @action
    setInputFiled(value: string): void {
        this.inputField = value;
    }

    @action
    async addAudioFile(): Promise<void> {
        this.audioFiles.push(this.inputField);

        this.setInputFiled("");
        // this.audioStream!.srcObject=
        // let ms = new MediaStream();
        // let an = new AudioNode();
        // an.
        // var audioTemp = new Audio();
        // audioTemp.crossOrigin = "anonymous";
        // audioTemp
        // audioTemp.onloadedmetadata = function () { cb(audioTemp.duration); }
        // audioTemp.src = src;


        // var url  = 'hoodie_robot_clipped.wav';

        // /* --- set up web audio --- */
        // //create the context
        // var context = new AudioContext();
        // //...and the source
        // var source = context.createBufferSource();

        // //connect it to the destination so you can hear it.
        // source.connect(context.destination);

        // /* --- load buffer ---  */
        // var request = new XMLHttpRequest();
        // //open the request
        // request.open('GET', url, true); 
        // //webaudio paramaters
        // request.responseType = 'arraybuffer';
        // //Once the request has completed... do this
        // request.onload = ()=> {
        //     context.decodeAudioData(request.response, (response)=> {
        //         /* --- play the sound AFTER the buffer loaded --- */
        //         //set the buffer to the response we just received.
        //         source.buffer = response;
        //         //start(0) should play asap.
        //         // this.audioStream.
        //         source.start(0);
        //         source.loop = true;
        //     }, function () { console.error('The request failed.'); } );
        // }
        // //Now that the request has been defined, actually make the request. (send it)
        // request.send();


        const audioCtx = new AudioContext();
        const source = audioCtx.createBufferSource();
        this.getAudio(this.audioFiles[0], audioCtx)
            .then(audioBuffer => this.linkAudio(audioBuffer, audioCtx, source))
            .catch(console.error);



    }

    linkAudio(audioBuffer: AudioBuffer, audioCtx: AudioContext, source: AudioBufferSourceNode) {
        source.buffer = audioBuffer;
        source.playbackRate.value = 1;

        // source.on
        source.start(0);
        const streamNode = audioCtx.createMediaStreamDestination();
        // streamNode.
        source.connect(streamNode);
        // const audioElem = new Audio();
        // audioElem.controls = true;
        // document.body.appendChild(audioElem);
        source!.onended = (e) => {
            this.getAudio(this.audioFiles[0], audioCtx)
                .then(audioBuffer => this.linkAudio(audioBuffer, audioCtx, source))
                .catch(console.error);
        }
        this.audioStream!.srcObject = streamNode.stream;
    }

    async getAudio(url: string, audioCtx: AudioContext): Promise<AudioBuffer> {
        return fetch(this.audioFiles[0], { mode: "no-cors" })
            .then(resp => resp.arrayBuffer())
            .then(buf => audioCtx.decodeAudioData(buf))
    }
};

// export default audio;