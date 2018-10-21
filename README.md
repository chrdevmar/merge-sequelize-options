## merge-sequelize-options
Utility for merging sequelize options objects.

## State of this package
This package is far from complete. It is essentially a basic object merger at this stage. The approach is to implement logic for each of the main options attributes (The ones that don't have simple string or number values).

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
