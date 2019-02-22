class ProgressCirlce extends React.Component {
  render() {
    const { progress } = this.props;

    // const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    const circumference = 60 * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;

    return (
      <svg
        x="0px"
        y="0px"
        height='1.5em'
        width='1.5em'
        viewBox="0 0 140 140"
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth='10'
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          r='60'
          cx='70'
          cy='70'
         />
      </svg>
    );
  }
}

export default ProgressCirlce;