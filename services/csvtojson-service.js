angular.module('saleskitApp').factory('CSVConverterService', [function () {

    return {
        csvToJSON : function(content) {
                        var lines=content.split('\n');
                        var result = [];
                        var start = 0;
                        var separator = ',';
                        var columnCount = lines[0].split(separator).length;

                        var headers = [];
                        // if (content.header) {
                        headers=lines[0].split(separator);
                        start = 1;
                        // }

                        for (var i=start; i<lines.length; i++) {
                            var obj = {};
                            var currentline=lines[i].split(new RegExp(separator+'(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)'));
                            if ( currentline.length === columnCount ) {
                                // if (content.header) {
                                //     for (var j=0; j<headers.length; j++) {
                                //         obj[headers[j]] = currentline[j];
                                //     }
                                // } 
                                // else {
                                // for (var k=0; k<currentline.length; k++) {
                                //     obj[k] = currentline[k];
                                // }
                                // }
                                obj = { 
                                    Selling: currentline[0], 
                                    SellingDefinition: currentline[1], 
                                    Drivers: currentline[2], 
                                    Approaches: currentline[3], 
                                    Outcomes: currentline[4], 
                                    Photo: currentline[5] 
                                }
                                result.push(obj);
                            }
                        }
                        console.log(result);
                        return result;
                    }
    }


}]);