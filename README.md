## merge-sequelize-options
Utility for merging ```n``` sequelize options objects. 

## State of this package
Custom merging logic is to be implemented for the different techniques and syntax variations of the various sequelize options.

The default behaviour (when custom logic is not implemented) is to recursively merge source object(s) into target. Array and Plain Object attributes will be merged with those of subsequent sources, other type values will be overwritten.

Check the [issues](https://github.com/ScaredIbis/merge-sequelize-options/issues) page to see which options need to be implemented

## Example Usage

```
  const target = {
    limit: 25,
    offset: 0,
    order: [
      ['name', 'desc'],
      ['type', 'desc']
    ]
  }

  const source = {
    offset: 50,
    order: [
      ['name', 'asc'],
      ['email', 'desc]
    ]
  }

  mergeSequelizeOptions(target, source)
  // custom logic is implemented for basic order clause syntax
  // => 
  {
    limit: 25,
    offset: 50,
    order: [
      ['name', 'asc'],
      ['type', 'desc'],
      ['email', 'desc']
    ]
  }
```

## Contributing
Check out the [issues](https://github.com/ScaredIbis/merge-sequelize-options/issues) page or create one of your own. Please include tests with any pull requests. To run tests, use


```
  npm test
```
