import React, { Component } from 'react';
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  {
    id: 9,
    text: 'Card #9',
    uri:
      'https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 10,
    text: 'Card #10',
    uri:
      'https://images.unsplash.com/photo-1509781200547-56ffc785bd2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a42dbb588b1647e8d0c4e1c8fc3a5f26&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 11,
    text: 'Card #11',
    uri:
      'https://images.unsplash.com/photo-1508325739122-c57a76313bf4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=303bfdadc28e6a6a5203db8272956b2c&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 12,
    text: 'Card #12',
    uri:
      'https://images.unsplash.com/photo-1493124071986-cccebebe4cc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efbc44ca514efee4cde0d0fbf6bd5e42&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 13,
    text: 'Card #13',
    uri:
      'https://images.unsplash.com/photo-1524687501140-49edc1efd2d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fa2855666b76627e343840f2bcd95d&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 14,
    text: 'Card #14',
    uri:
      'https://images.unsplash.com/photo-1521914102691-ae0b52046c04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2268d2124f14830645b2889109fcddab&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 15,
    text: 'Card #15',
    uri:
      'https://images.unsplash.com/photo-1520951097942-555bbbf3e88d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67ec72fab3eb00310234eda97f146cc7&auto=format&fit=crop&w=700&q=60'
  },
  { id: 16, text: 'Card #16', uri: 'https://picsum.photos/200/300/?random' }
];

export default class App extends Component {
  state = { data: DATA };

  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>I can customize the Card further.</Text>
        <Button icon={{ name: 'code' }} backgroundColor="#03A9F4" title="View Now!" />
      </Card>
    );
  }

  onRestoreCards = () => {
    this.setState({ data: [...DATA] });
  };

  renderNoMoreCards = () => {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>Theres no more content here!</Text>
        <Button onPress={this.onRestoreCards} backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Deck data={this.state.data} renderCard={this.renderCard} renderNoMoreCards={this.renderNoMoreCards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
});
