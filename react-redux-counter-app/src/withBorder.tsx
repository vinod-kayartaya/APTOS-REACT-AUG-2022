interface IBorderProps {
    width?: string;
    color?: string;
    style?: string;
}
function withBorder(OldComp: any, borderProps?: IBorderProps) {
    borderProps = {
        ...{
            color: 'black',
            width: '1px',
            style: 'solid',
        },
        ...borderProps,
    };
    return (props: any) => {
        return (
            <div
                style={{
                    borderWidth: borderProps?.width,
                    borderStyle: borderProps?.style,
                    borderColor: borderProps?.color,
                    padding: '20px',
                }}
            >
                <OldComp {...props} />
            </div>
        );
    };
}

export default withBorder;
