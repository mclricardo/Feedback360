var Song = Backbone.Model.extend({
    defaults: {
        name: "Not specified",
        artist: "Not specified"
    },
    initialize: function () {
        console.log("Music is the answer");
    }
});

var Album = Backbone.Collection.extend({
    model: Song
});

var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });

var myAlbum = new Album([song1, song2, song3]);

SimpleSample = {};

SimpleSample.Person = Backbone.Model.extend({});

SimpleSample.Participants = Backbone.Model.extend({});

SimpleSample.FormView = Backbone.View.extend({
    el: "#edit-form",
    
    initialize: function(){
        Backbone.ModelBinding.call(this);
    }
});

SimpleSample.DisplayView = Backbone.View.extend({
    el: "#display",
    
    events: {
        "click #reset-button": "reset"
    },
    
    initialize: function(){
        Backbone.ModelBinding.call(this);
    },
        
    reset: function(){
        this.model.set({name: 'Marty McFly', position: 'manager', first_name: "joe", last_name: "bob"});
    }
});

SimpleSample.ParticipantsGridView = Backbone.View.extend({
    el: "#participants-grid",

    initialize: function () {
        Backbone.ModelBinding.call(this);
    },

    reset: function () {
        this.model.set(myAlbum);
    }
});

SimpleSample.App = function(){
    this.start = function(){
        var person = new SimpleSample.Person();
        var formView = new SimpleSample.FormView({model: person});
        var displayView = new SimpleSample.DisplayView({ model: person });
        var participantsGridView = new SimpleSample.ParticipantsGridView({ model: myAlbum });

        person.set({ name: 'Marty McFly', position: 'manager', first_name: "joe", last_name: "bob" });
    }
}
    
$(function(){
    var app = new SimpleSample.App();
    app.start();
})
