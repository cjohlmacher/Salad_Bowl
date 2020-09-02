import React from 'react'
import styles from './styles'

const Filter = (props) => {
  const {
    active,
    onToggleFilter,
    topic,
  } = props;

  let styleFilter;

  if (active === true) {
    styleFilter = styles.active;
  } else {
    styleFilter = styles.inactive;
  }

  const handleClick = () => {
    onToggleFilter(topic);
  };

  return (
    <div style={styleFilter} onClick={handleClick}>
      <p style={styles.text}>{topic}</p>
    </div>
  );
}

export default Filter;

/*
class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likesDogs: true,
      likesCats: false,
    };

    THE OTHER WAY WOULD BE IN FUNCTIONAL COMPONENTS:
    const [likesDogs, setLikesDogs] = useState(true);
    const [likesCats, setLikesCats] = useState(false);
  }

  getContainerStyle() {
    const {
      active,
    } = this.props;

    const {
      likesDogs,
      likesCats,
    } = this.state;

    this.setState({
      likesCats: true,
    });

    if (active === true) {
      return styles.active;
    }

    return styles.inactive;
  }

  renderText() {
    const {
      topic,
    } = this.props;

    return (
      <p style={styles.text}>{topic}</p>
    );
  }

  render() {
    return (
      <div style={getContainerStyle()}>
        {renderText()}
      </div>
    );
  }
}
*/