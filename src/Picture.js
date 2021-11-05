import React from "react";
import styled from 'Styled-components';


const StyledPicture = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: dotted 1px;
`
export default function Picture({ info, action}) {
    return {
        <StyledPicture>
        </StyledPicture>
    }
}
export default class Data extends Component {
    // Holds State
    constructor(props) {
      super(props);
      this.state = {
        max: max,
        begin: begin,
        startDate: currentTime,
        data: null
      };
      this.handleChange = this.handleChange.bind(this);
    }
handleChange(date) {
    this.setState(
      {
        startDate: date,
        begin: date
      },
      () => {}
    );
    setTimeout(
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=Ht23J45X12wk1Szk24cfM5OvfrM9sAzfaPQOspE5=${
            this.state.startDate === "2019-07-17"
              ? this.state.startDate.toISOString().slice(0, -14)
              : date.toISOString().slice(0, -14)
          }`
        )
        .then(response => {
          this.setState({
            data: [response.data]
          });
        }),
      3000
    );
  }

  // Initial Data
  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Ht23J45X12wk1Szk24cfM5OvfrM9sAzfaPQOspE5=${this.state.startDate.slice(
          0,
          -15
        )}`
      )
      .then(response => {
        this.setState({
          data: [response.data]
        });
      });
  }

  render() {
    return (
      <>
        <h1>Select Date:</h1>
        {/* Displays Calendar */}
        <DatePicker
          maxDate={this.state.max}
          selected={this.state.begin}
          onChange={this.handleChange}
        />
        <Cards data={this.state.data} />
      </>
    );
  }
}