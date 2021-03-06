import React, { Component } from 'react';
import axios from '../../../AxiosOrders';
import Spinner from '../../ui/Spinner/Spinner';
import Modal from '../../ui/Modal/Modal';
import BackDrop from '../../ui/backdrop/Backdrop';

const serviceHandler = (WrappedComp) => {
    return class extends Component {
        state = {
            loading: null,
            error: null
        }

        componentWillMount() {
            this.reqIntceptor = axios.interceptors.request.use((request) => {
                this.setState({loading: true, error: null});
                return request;
            });

            this.resIntceptor = axios.interceptors.response.use((response) => {
                this.setState({loading: null, error: null});
                return response;
            }, () => {
                this.setState({loading: false, error: true})
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqIntceptor);
            axios.interceptors.response.eject(this.resIntceptor);
        }

        closeErrorModal = () => {
            this.setState({error: null});
        }
        
        render() {
            const spinner = this.state.loading ? <Spinner></Spinner> : null; 
            return (
                <div>
                    <WrappedComp {...this.props}></WrappedComp>
                    {spinner}
                    <BackDrop clicked = {this.closeErrorModal} show = {this.state.error} />
                    <Modal show = {this.state.error}>Something went wrong</Modal>
                </div>
            )
        }
    }
}

export default serviceHandler;