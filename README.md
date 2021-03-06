# mobx-react-typescript-reactstrap

## Bootstrap theme and CSS customization

Under the folder path `styles` you will find _bootstrap-variables.scss.
In this file you will be able to define new or override existing bootstrap variables.

See here for further details
[https://getbootstrap.com/docs/4.0/getting-started/theming/#responsive](https://getbootstrap.com/docs/4.0/getting-started/theming/#responsive)

### Using bootstraps own responisve mixins

Using bootstraps own mixins to define you own styles is very simple, it will allow you to quickly make responsive screens utilising bootstraps define media-queries.

Min width media query

```scss
@include media-breakpoint-up(sm) {
  // Styles
}

// Compiled:
//   @media (min-width: 544px) {}
```

Max width media query

```scss
@include media-breakpoint-down(sm) {
  // Styles
}

// Compiled:
//  @media (min-width: 576px) and (max-width: 768px) {}
```

Min and max width media query

```scss
@include media-breakpoint-between(sm, md) {
  // your code
}
//  Compiled:
//    @media (min-width: 576px) and (max-width: 992px) {}
```

Mixin size names

| name          | minimum width (px)    |
| ------------- |:---------------------:|
| xs            | 0                     |
| sm            | 576                   |
| md            | 768                   |
| lg            | 992                   |
| xl            | 1200                  |

See the blog post here for further useage.
[https://eddyerburgh.me/use-bootstrap-4-media-query-mixins](https://eddyerburgh.me/use-bootstrap-4-media-query-mixins)
