angular.module('saleskitApp').factory("mfly", function($q) {
    return  {

                nextItem: function() {
                    mflyCommands.next();
                },

                previousItem: function() {
                    mflyCommands.previous();
                },

                close: function() {
                    mflyCommands.close();
                }

            }
});