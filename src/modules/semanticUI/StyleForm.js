import React, { Component } from "react";
import { Grid, Segment, Divider, Flag, Image, Item } from "semantic-ui-react";

class StyleForm extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <div>10</div>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" src="/images/wireframe/image.png" />

                <Item.Content>
                  <Item.Header as="a">Header</Item.Header>
                  <Item.Meta>Description</Item.Meta>
                  <Item.Description>
                    <Image src="/images/wireframe/short-paragraph.png" />
                  </Item.Description>
                  <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size="tiny" src="/images/wireframe/image.png" />

                <Item.Content>
                  <Item.Header as="a">Header</Item.Header>
                  <Item.Meta>Description</Item.Meta>
                  <Item.Description>
                    <Image src="/images/wireframe/short-paragraph.png" />
                  </Item.Description>
                  <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <div>6</div>
          <Segment>A Segment</Segment>
          <Segment>B Segment</Segment>
          <Divider horizontal>Divide</Divider>
          <Segment>C Segment</Segment>
          <Flag name="sg" />
          <Segment.Group>
            <Segment>D Segment</Segment>
            <Segment>E Segment</Segment>
          </Segment.Group>
          <Segment.Group>
            <Segment>F Segment</Segment>
            <Segment>G Segment</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default StyleForm;
