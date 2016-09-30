/**
 * Created by Choichanghyun on 2016. 9. 23..
 */
/**
 * Created by Choichanghyun on 2016. 9. 23..
 */

define(['ojs/ojcore','knockout','jquery','ojs/ojselectcombobox'],
    function(oj,ko,$){
        function StarWarsViewModel(){
            var self= this;
            self.selectedVal =ko.observableArray();

            self.characters= ko.observableArray([
                {"value":"1", "label":"Luke Skywalger"},
                {"value":"4", "label":"Darth vader"},
                {"value":"10", "label":"Obi-Wan Kenobi"},
                {"value":"11", "label":"Anakin Skywalker"},
                {"value":"13", "label":"Chewbacca"},
                {"value":"14", "label":"Han Solo"}
            ]);

            self.chracterSelected = function(event,data){
                if(self.selectedVal() === undefined){
                    return;
                }
                var characterId = self.selectedVal()[0];
                if( characterId !==""){
                    $.get("httpL//swapi.co/api/people/" + characterId,function(json,status){
                        console.log(json);
                    });
                }
            }

        }
        return new StarWarsViewModel();

    }
);