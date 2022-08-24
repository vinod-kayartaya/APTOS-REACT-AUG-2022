function withBorder(
    OldComp: any,
    borderPorps = {
        borderColor: 'black',
    }
) {
    return (props: any) => {
        return (
            <div
                style={{
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: borderPorps['borderColor'],
                    padding: '20px',
                }}
            >
                <OldComp />
            </div>
        );
    };
}

export default withBorder;
