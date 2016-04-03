var React = require('react-native');
var english_german = require('./english_german.json')

var styles = React.StyleSheet.create({
    parent: {
        padding: 16,
    },

    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold',
    },

    germainWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic',
    }
});

var Dictionary = React.createClass({
    getInitialState: function() {
        return {
            input: '',
            output: ''
            };
    },

    showMeaning: function(){
        var meaning = this.state.input in english_german ?
            english_german[this.state.input] :
            "Not Found";

        // Update the state
        this.setState({
            output: meaning
        });

    },


    render: function(){
        var layout =
        <React.View style = {styles.parent}>

            <React.Text>
                Type something in English
            </React.Text>

            <React.TextInput text = {this.state.input}
                onChangeText={(e) => this.setState({input: e})}
                text = { this.state.input }
                onSubmitEditing = { this.showMeaning }
            />

            <React.Text style = {styles.germanLabel} >
                Its Germain equivalent is:
            </React.Text>

            <React.Text style={styles.germanWord} >
                {this.state.output}
            </React.Text>

        </React.View>
        ;

        return layout;

    },
});

React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
