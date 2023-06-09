# fc-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                 | Default                        |
| ------------- | ------------- | ----------- | -------------------- | ------------------------------ |
| `disabled`    | `disabled`    |             | `boolean`            | `false`                        |
| `label`       | `label`       |             | `string`             | `"Please enter you name"`      |
| `placeholder` | `placeholder` |             | `string`             | `"Please fill here your name"` |
| `type`        | `type`        |             | `"number" \| "text"` | `"text"`                       |


## Events

| Event         | Description | Type                                     |
| ------------- | ----------- | ---------------------------------------- |
| `inputChange` |             | `CustomEvent<{ [label: string]: any; }>` |


## Dependencies

### Used by

 - [fc-form](../fc-form)

### Graph
```mermaid
graph TD;
  fc-form --> fc-input
  style fc-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
