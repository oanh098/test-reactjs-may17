import React from 'react'

const connectDecorator = (Component, store) => {

    return class Connect extends React.Component {

        constructor(props) {
            super(props)


        }
        render() {
            return (

                    <Component {...this.props} {...this.state} />
                 )
        }

    }
}


export default (store) => {
    return (target) => connectDecorator(target, store)
}