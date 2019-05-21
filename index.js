module.exports = {

    getHierarchy: function(test,attribute,attributes){
        function convert(attribute){
            if(attribute.parent != null){
                attributes.forEach(function(attr){
                    if(attr.id == attribute.parent){
                        console.log("found")
                        sample = {}
                        sample.id = attr.id
                        sample.name = attr.name
                        test.push(sample)
                        if(attr.parent != null ){
                            convert(attr)
                        }
                    }
                }); 
            }
            
        }
        convert(attribute)
    },

    getRoot: function(components,component,root){
        function test(components,component,root){
            components.forEach(function(comp){
                if(comp.id == component.id){
                    if(comp.parent != null){
                        test(components,comp.parent,root) 
                    }else{
                        root.push(comp)
                    }
                }
            }); 
        }
        test(components,component,root)
    },

}