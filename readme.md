Break the complex tree structures in your db and get the data in simple form to use it in your app

* Use the below function to get the hierarchy of the any attribute

```
    getHierarchy(test,attribute,attributes)

    The structure for the object must be in this form

    test : Will be an Empty Array in which you will get the hierarchy
    Eg: []

    attribute: Attribute for which you want the hierarchy
    Eg:{id: 5,name: 'child Element',parent: 4 }

    attributes: List of Attributes

    Eg: [{id: 5,name: 'Child 1',parent: 1 },{id: 1,name: 'Top parent',parent: null },{id: 2,name: 'Child 1',parent: 1 },{id: 3,name: 'Child 3',parent: 2 },{id: 4,name: 'Child 4',parent: 3 },{id: 5,name: 'child Element',parent: 4 },{id: 6,name: 'Child 6',parent: 5 } ]

    The result you will get in the test array as

    [{"id":4,"name":"Child 4"},{"id":3,"name":"Child 3"},{"id":2,"name":"Child 1"}]

    The test array will contain the data from low to high parent hierarchy.If you want it the opposite way you can just reverse the array

```

* Use the below function to get the top root of any nested element

```
    getRoot(attributes,attribute,root) 

    The structure for the object must be in this form

    attributes: List of Attributes

    Eg: [{id: 5,name: 'Child 1',parent: 1 },{id: 1,name: 'Top parent',parent: null },{id: 2,name: 'Child 1',parent: 1 },{id: 3,name: 'Child 3',parent: 2 },{id: 4,name: 'Child 4',parent: 3 },{id: 5,name: 'child Element',parent: 4 },{id: 6,name: 'Child 6',parent: 5 } ]

    attribute: Attribute for which you want the root
    Eg:{id: 5,name: 'child Element',parent: 4 }

    root : Will be an Empty Array in which you will get the root element
    Eg: []


    The result you will get in the root array as

    [{id: 1,name: 'Top parent',parent: null }]

```
    
