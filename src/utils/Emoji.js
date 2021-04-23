const Emoji = props => {
    const { label, symbol } = props;

    return (
        <span role="img" aria-label={label ? label : ""}>
            {symbol}
        </span>
    );
};
export default Emoji;
