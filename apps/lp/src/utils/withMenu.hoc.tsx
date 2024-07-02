import Menu from "#//components/Menu/Menu"

const withMenu = (Component: React.ComponentType): React.FC => (props) => {
    return (
        <div>
            <Component {...props} />
            <Menu />
        </div>
    )
}

export default withMenu;