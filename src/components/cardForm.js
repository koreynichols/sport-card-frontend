import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class cardForm extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <div>
        <Form>
          <FormGroup>
          <Label>Player Name</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="50"
          />
          <Label>Sport</Label>
          <Input 
            type="text"
            name="sport"
            placeholder="Enter sport"
            maxLength="15"
          />
          <Label>Team</Label>
          <Input 
            type="text"
            name="team"
            placeholder="Enter team name"
            maxLength="50"
          />
          <Label>Card Company</Label>
          <Input 
            type="text"
            name="card_company"
            placeholder="Enter Card Company Name"
            maxLength="64"
          />
          <Label>Card Set</Label>
          <Input 
            type="text"
            name="card_set"
            placeholder="Enter card set name"
            maxLength="64"
          />
          <Label>Year</Label>
          <Input 
            type="text"
            name="year"
            placeholder="Enter year"
            maxLength="64"
          />
          <Label>Rookie Card</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          <Label>Auto</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          <Label>Relic</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          <Label>Relic Type</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          <Label>Numbered</Label>
          <Input 
            type="checkbox"
          />
          <Label>Numbered To</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          <Label>Img</Label>
          <Input 
            type="text"
            name="player_name"
            placeholder="Enter player name"
            maxLength="64"
          />
          </FormGroup>
        </Form>
      </div>
    );
  }
}