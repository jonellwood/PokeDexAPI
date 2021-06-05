import React from 'react'
import { connect } from 'react-redux';
import ErrorHandler from '../components/ErrorHandler';
import Loader from '../components/Loader';
import { fetchPokemons } from '../store/actions/index';

class SearchPokemons extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            err: null
        };
    }

    componentDidMount () {
        this.props.fetchPokemon()
        .then((err) => {
            this.setState({ loading: false. err});
        });
    }

    render () {
        const { err, loading } = this.state;
        const { pokemons } = this.props;
        const element = err 
            ? <ErrorHandler err={err} />
            : <div> Go eff yourself</div> ;

    return(
        <main>
            { loading ? <Loader /> : element }
        </main>
        );
    }
    }

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
});


export default connect(mapStateToProps, { fetchPokemons })(SearchPokemons) 
