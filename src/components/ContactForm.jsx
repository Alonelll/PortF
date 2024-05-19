import React, {Component} from "react";

export default class ContactForm extends Component {
    state = {}

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Absenden"/>
            </form>

        );
    }
}
