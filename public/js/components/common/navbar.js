((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: 'js/components/common/navbar.html',
        controller: [ 'carsServices','ownersServices', '$state', function($carsServices, ownersServices, $state) {
            angular.extend(this, {
                $onInit() {
                    ownersServices.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {

                    })
                },
                disconnect() {
                    ownersServices.disconnect().then(() => {
                        Materialize.toast('Disconnected', 4000, 'toast-warning')
                        this.user = null
                        $state.reload()
                    })
                }
            })
        }]
    })
})(require('angular').module('app.common'))