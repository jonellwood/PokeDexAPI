import React from 'react';
import { connect } from 'react-redux';
import LinkItems from '../components/LinkItems';
import Loader from '../components/Loader';
import ErrorHander from '../components/ErrorHandler';
import { fetchPokemonTypes } from '../store/actions/index';

class PokemonTypes extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            err: null
        };
    }

    componentDidMount () {
        this.props.fetchPokemonTypes()
            .then((err) => {
            this.setState({ loading: false, err });
        });
    }

    render () {
        const { err, loading } = this.state;
        const { pokemonTypes } = this.props;
        const element = err 
            ? <ErrorHander err={err} />
            : <LinkItems items={pokemonTypes} route="type" />;

        return (
            <main>
                { loading ? <Loader /> : element }
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemonTypes: state.PokemonTypes
});

export default connect(mapStateToProps, { fetchPokemonTypes })(PokemonTypes);