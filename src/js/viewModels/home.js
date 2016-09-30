/**
 * Created by Choichanghyun on 2016. 9. 23..
 */

define(['ojs/ojcore','knockout','jquery','appController'],
        function(oj,ko,$,app){
            function HomeViewModel() {
                var self = this;


                self.goChild1 = function () {
                    app.router.go("homechild_1");
                };
                self.goChild2 = function () {
                    app.router.go("homechild_2");
                };
            }
        }
    );