## merge-sequelize-options
Utility for merging sequelize options objects.

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
Please include tests with any pull requests. To run tests, use


```
  npm test
```
