import React, { Component } from 'react'
import axios from 'axios';
import './styles.css';
import CountUp from 'react-countup';
export class Card extends Component {
    constructor(props){
        super(props);
            this.state= {
                confirmData : [],
                deathData : [],
                recoveredData : [],
                activeCareData : [],
            }
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        axios({
            method : 'GET',
            url : 'https://kawalcovid19.harippe.id/api/summary'
        })
        .then(res => {
            console.log(res)
            let confirm = res.data.confirmed
            let death = res.data.deaths
            let recovered = res.data.recovered
            let activeCare = res.data.activeCare
            this.setState({
                confirmData : confirm,
                deathData : death,
                recoveredData : recovered,
                activeCareData : activeCare
            })

        })
        .catch (err => {
            console.log(err)
        })
    }
    render() {
        let confirmed = this.state.confirmData.value
        let death = this.state.deathData.value
        let recoveredData = this.state.recoveredData.value
        let activeCare = this.state.activeCareData.value
        console.log(confirmed)
        return (
        <div className="container mt-5">

            <div className="row mt-5 shadow p-3 mb-3 bg-white rounded">
              <div className="col-lg bg-white">
              <div class="card text-center shadow p-3 mb-3 bg-white rounded positif">
                <div class="card-body positif">
                <h5 class="card-title">Confirmed Positive</h5>
                     <p class="card-text">{confirmed}</p>
                </div>
             </div>
                <div class="card text-center shadow p-3 mb-3 bg-white rounded">
                <div class="card-body">
                <h5 class="card-title">Recovered</h5>
                     <p class="card-text">{recoveredData}</p>
                </div>
             </div>
             <div class="card text-center shadow p-3  bg-white rounded">
                <div class="card-body bg-white">
                <h5 class="card-title  bg-white">Death</h5>
                     <p class="card-text  bg-white">{death}</p>
                </div>
             </div>
              </div>
              <div className="col-lg bg-white">
           <img src="https://image.freepik.com/free-vector/virus-disinfection-concept_23-2148477224.jpg" alt=""/>
              </div>
            </div>
        </div>
        )
    }
}

export default Card
