'use strict';

import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax'

import AppContent from "./entities/app-content";

class App extends Component {
	constructor(){
		super();
		this.state = {
			userInfo: null,
			repos: {
				status: false,
				data: [],
				link: ''
			},
			starred: {
				status: false,
				data: [],
				link: ''
			},
			loaddingRequest: null
		};
		
		this.username = '';
		this.changeSearchInput = this.changeSearchInput.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.getRepos = this.getRepos.bind(this);
	}
	
	changeSearchInput(e){
		this.username = e.target.value
	}
	
	makeRequest(url){
		return ajax().get(url);
	}
	
	get getGithubAPIURL(){
		return `http://api.github.com/users/${this.username}`;
		
	}
	
	getRepos(type){
		let objToRequest = type == 'repos' ? this.state.repos : this.state.starred;
		
		return (e) => {
			this.setState({
				loaddingRequest: true
			});
			
			this.processActionsEvent(objToRequest, (resp) => {
				this.setState({
					loaddingRequest: false
				});
				
				if(type == 'repos'){
					return this.updateRepositories(resp);
				}
				
				return this.updateStarred(resp)
			});
		}
	}
	
	updateRepositories(data){
		this.setState({
			repos: {
				data: data,
				link: this.state.repos.link,
				status: true
			},
			starred: {
				data: [],
				status: false,
				link: this.state.starred.link,
				
			}
		});
	}
	
	updateStarred(data){
		this.setState({
			repos: {
				data: [],
				link: this.state.repos.link,
				status: false
			},
			starred: {
				data: data,
				status: true,
				link: this.state.starred.link,
				
			}
		});
	}
	
	processActionsEvent(actionObj, cb){
		if(actionObj.data.length) return;
		
		this.makeRequest(actionObj.link).then((resp)=> cb(resp.map(
			data => ({
				name: data.name,
				link: data.html_url,
				description: data.description
			})
		)));
	}
	
	addLoaddingStatus(){
		this.setState({
			loaddingRequest: true
		});
	}
	
	handleSearch(e){
		e.preventDefault();
		
		const endPoint = this.getGithubAPIURL;
		
		this.addLoaddingStatus();
		this.makeRequest(endPoint).then(resp => this.setState({
			userInfo: resp,
			repos: {
				data: [],
				status: false,
				link: `${endPoint}/repos`
			},
			starred: {
				data: this.state.starred.data,
				status: false,
				link: `${endPoint}/starred`
			}
		})).always(() => {
			this.setState({
				loaddingRequest: false
			});
		}).catch(()=>{
			alert(`Your search don't match with a github user. Please type a different user.`)
		});
	}
	
	render() {
		return (
			<AppContent
				{... this.state}
				clickViewRepoAction={this.getRepos('repos')}
				clickViewStarredAction={this.getRepos('starred')}
				handleSearch={this.handleSearch}
				changeSearchInput={this.changeSearchInput}
			/>
		);
	}
};

export default App;