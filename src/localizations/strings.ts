import LocalizedStrings, { LocalizedStringsMethods } from "localized-strings";

// interface LoginPage {
//     loginSubTitle: string,
//     couldNotLogin: string,
//     validation: {
//         notValidUsernameAndPassword: string
//     }
// }

// interface ForgotPassworPage {
//     backButtonLabel: string
//     forgotPasswordPageTitle: string,
//     text: string,
//     weWillSendYouAnEmail: string,
//     sendPasswordResetButtonText: string
// }

// interface GuardsPage {
//     list: {
//         guardColumnLabel: string,
//         companyColumnLabel: string,
//         emailColumnLabel: string,
//         actionColumnLabel: string,
//     }
// }

// interface SitePages {
//     login: LoginPage,
//     forgotPassword: ForgotPassworPage
//     guards: GuardsPage
// }



export interface IStrings extends LocalizedStringsMethods {
    // pages: SitePages,
    loginPage: {
        loginSubTitle: string,
        couldNotLogin: string,
        validation: {
            notValidUsernameAndPassword: string
        }
    },
    forgotPasswordPage: {
        backButtonLabel: string
        forgotPasswordPageTitle: string,
        text: string,
        weWillSendYouAnEmail: string,
        sendPasswordResetButtonText: string
    },
    guardsPage: {
        list: {
            guardColumnLabel: string,
            companyColumnLabel: string,
            emailColumnLabel: string,
            actionColumnLabel: string,
        }
    },
    incidentPage: {
        list: {
            title: string,
            dropDownFilters: {
                all: string,
            }
            addButtonText: string,
            refreshButtonText: string,
            incidentMapLabel: string,
            incidentMapFullScreenButtonText: string,
            incidentStatistics: string,
        },
        view: {
            nameLabel: string,
            locationLabel: string,
            timeLabel: string,
            categoryLabel: string,
            descriptionLabel: string
            imageLabel: string
            guardDetailsLabel: string,
            incidentMapLabel: string,
            incidentMapFullScreenButtonText: string,
            incidentMapExitFullScreenButtonText: string,
            incidentStatistics: string,
        }
    },
    zonesPage: {
        list: {
            title: string,

        },
        view: {
            addButtonText: string,
            zoneMapLabel: string,
            zoneReport: string,
            zoneReportContactLabel: string,
            zoneMapFullscreenModeButtonText: string,
            zoneMapExitFullscreenButtonText: string,
            guardsReportLabel: string,
            zoneStatisticsLabel: string,
        }
        add: {
            backButtonLabel: string,
            drawingInstructionsText: string,
            startDrawingButtonText: string,
            clearDrawingButtonText: string,
            enterZoneNamePlaceholderText: string,
            enterZoneSubTitleExampleLabel: string,
            saveButtonText: string,
            cancelButtonText: string
        }
    },
    breadcrumbs: {
        home: string,
        dashboard: string,
        sos: string,
        incidents: string,
        zones: string,
        sites: string,
        guards: string,
        roster: string
    },
    menubar: {
        dashboardLabel: string,
        sosLabel: string,
        incidentsLabel: string,
        zonesLabel: string,
        sitesLabel: string,
        guardsLabel: string,
        rosterLabel: string
    },
    login: string,
    logout: string,
    password: string,
    passwordInput: {
        placeholder: string,
        label: string,
        validation: {
            enterPasswordMessage: string,
            tooShortMessage: string,
            tooLongMessage: string,
            doesnotMatchMessage: string,
        }
    },
    emailInput: {
        placeholder: string,
        label: string,
        validation: {
            enterEmailMessage: string,
            tooShortMessage: string,
            tooLongMessage: string,
            doesnotMatchMessage: string,
        }
    },
    changePassword: string,
    forgotPassword: string,
    privacyPolicy: string,
    // privacy: string,
    change: string,
    email: string,
    name: string,
    number: string,

}




export const SiteLocalizedStrings: IStrings = new LocalizedStrings({
    // ja: {
    //     login: "ログイン",
    //     loginPage: {
    //         loginSubTitle: "アカウントをログインする",
    //         couldNotLogin: "ただいまサーバーの問題でログインができませんでした",
    //         validation: {
    //             notValidUsernameAndPassword: "メールとパスワードの結合が見つかりませんでした"
    //         }
    //     },
    //     forgotPasswordPage: {
    //         backButtonLabel: "戻る",
    //         forgotPasswordPageTitle: "ログインできませんか?",
    //         text: "リカバリリンクを次のメールアドレスに送りました",
    //         weWillSendYouAnEmail: "リカバリリンクを次のメールアドレスに送ります。",
    //         sendPasswordResetButtonText: "リカバリリンクを送信"
    //     },
    //     guardsPage: {
    //         list: {
    //             guardColumnLabel: "守衛",
    //             companyColumnLabel: "会社",
    //             emailColumnLabel: "メールアドレス",
    //             actionColumnLabel: "アクション",
    //         }
    //     },
    //     breadcrumbs: {
    //         home: "ホーム",
    //         dashboard: "ダッシュボード",
    //         sos: "緊急",
    //         incidents: "事件",
    //         zones: "区域",
    //         sites: "敷地",
    //         guards: "守衛",
    //         roster: "ラスター"
    //     },
    //     menubar: {
    //         dashboardLabel: "ダッシュボード",
    //         //前板　－まえいた
    //         //ダッシュボード
    //         //計器盤　ー　けいきばん
    //         //
    //         sosLabel: "緊急",
    //         incidentsLabel: "事件",
    //         zonesLabel: "区域",
    //         //区域　－くいき
    //         sitesLabel: "敷地",
    //         //敷地　－しきち
    //         guardsLabel: "守衛",
    //         //しゅえい
    //         rosterLabel: "ラスター"
    //     },

    //     //current　password　=　現在のパスワード　げんざい
    //     passwordInput: {
    //         placeholder: 'パスワードを入力',
    //         label: 'パスワード',
    //         validation: {
    //             tooShortMessage: 'パスワードは６文字以上が必要です',
    //             tooLongMessage: 'パスワードは120文字以下が必要です',
    //             doesnotMatchMessage: 'パスワードが合うわないです',
    //             enterPasswordMessage: 'パスワードを入力してください'
    //         }
    //     },
    //     emailInput: {
    //         //メールアドレス
    //         placeholder: 'メールアドレスを入力',
    //         label: 'メールアドレス',
    //         validation: {
    //             tooShortMessage: 'メールアドレスは６文字以上が必要です',
    //             tooLongMessage: 'メールアドレスは120文字以下が必要です',
    //             doesnotMatchMessage: 'パスワードが合うわないです',
    //             enterEmailMessage: 'メールアドレスを入力してください'
    //         }
    //     },
    //     logout: "ログアウト",
    //     password: "パスワード",
    //     changePassword: "パスワードを変える",
    //     forgotPassword: "パスワードを忘れた方はこちら",
    //     privacyPolicy: "プライバシーポリシー",
    //     change: "変える",
    //     email: "メールアドレス",
    //     name: "名前",
    //     number: "電話"
    // },
    en: {
        login: "Login",
        loginPage: {
            loginSubTitle: "Sign In to your account",
            couldNotLogin: "Due to a network and/or server issue we could not log you in at this time.",
            validation: {
                notValidUsernameAndPassword: "A valid username and password combination could not be found"
            }
        },
        forgotPasswordPage: {
            backButtonLabel: "",
            forgotPasswordPageTitle: "Password Reset",
            text: "We have tried sending a password reset email. Please check your emails.",
            weWillSendYouAnEmail: "We will email you the instructions if you have a valid account",
            sendPasswordResetButtonText: "Send Password Reset"
        },
        guardsPage: {
            list: {
                guardColumnLabel: "Guard",
                companyColumnLabel: "Company",
                emailColumnLabel: "Email",
                actionColumnLabel: "Action",
            }
        },
        incidentPage: {
            list: {
                title: "Incidents",
                dropDownFilters: {
                    all: "All",
                },
                addButtonText: "Add",
                refreshButtonText: "Refresh",
                incidentMapLabel: "Incidents Map",
                incidentMapFullScreenButtonText: "Fullscreen Mode",
                incidentMapExitFullScreenButtonText: "Exit Fullscreen",
                incidentStatistics: "Incident Statistics"
            },
            view: {
                nameLabel: "Name",
                locationLabel: "Location",
                timeLabel: "Time",
                categoryLabel: "Category",
                descriptionLabel: "Description",
                imageLabel: "Images",
                guardDetailsLabel: "Guard Details",
                incidentMapLabel: "Incident Map",
                incidentMapFullScreenButtonText: "Fullscreen Mode",
                incidentMapExitFullScreenButtonText: "Exit Fullscreen",
                incidentStatistics: "Incident Statistics"
            }
        },
        zonesPage: {
            list: {
                title: "Zones",
            },
            view: {
                addButtonText: "Add",
                zoneMapLabel: "Zone Map",
                zoneReport: "Zone Report",
                zoneReportContactLabel: "Contact",
                zoneMapFullscreenModeButtonText: "Fullscreen Mode",
                zoneMapExitFullscreenButtonText: "Exit Fullscreen",
                guardsReportLabel: "Guards Report",
                zoneStatisticsLabel: "Zone Statistics",
            },
            add: {
                backButtonLabel: "Back",
                drawingInstructionsText: "Now you can use the drawing tool to create new Zone.",
                startDrawingButtonText: "Start drawing",
                clearDrawingButtonText: "Clear",
                enterZoneNamePlaceholderText: "Please Enter Zone name",
                enterZoneSubTitleExampleLabel: "Example: Queen Victoria Market",
                saveButtonText: "Save",
                cancelButtonText: "Cancel"
            }
        },
        breadcrumbs: {
            home: "Home",
            dashboard: "Dashboard",
            sos: "SOS",
            incidents: "Incidents",
            zones: "Zones",
            sites: "Sites",
            guards: "Guards",
            roster: "Roster"
        },
        menubar: {
            dashboardLabel: "Dashboard",
            sosLabel: "SOS's",
            incidentsLabel: "Incidents",
            zonesLabel: "Zones",
            sitesLabel: "Sites",
            guardsLabel: "Guards",
            rosterLabel: "Roster"
        },
        logout: "Logout",
        password: "Password",
        passwordInput: {
            placeholder: 'password',
            label: 'Password',
            validation: {
                tooShortMessage: 'Your password must be a minimum of 6 characters',
                tooLongMessage: 'Your password must be a maximum of 120 characters',
                doesnotMatchMessage: 'Your passwords do not match',
                enterPasswordMessage: 'Please enter your password'
            }
        },
        emailInput: {
            placeholder: 'email',
            label: 'Email',
            validation: {
                tooShortMessage: 'Email address has to be atleast 3 characters',
                tooLongMessage: 'Email address can only be upto 120 characters',
                doesnotMatchMessage: 'Does not match',
                enterEmailMessage: 'Please enter an email address'
            }
        },
        changePassword: "Change Password",
        forgotPassword: "Forgot Password",
        privacyPolicy: "Privacy Policy",
        change: "Change",
        email: "Email",
        name: "Name",
        number: "Number"
    }
}, {
        logsEnabled: true,
        pseudo: false,
        pseudoMultipleLanguages: false
    });
