import axios from "axios";
import axiosInstance from "./axiosInstance";



export async function getTotalPopulation() {
    const res = await axiosInstance.get('/tp')
    console.log(res.data, "In api file")

    if (res.data.success) {
        return res.data.tPopulation
    }
}

export async function getTotalCountries(){
    console.log("#############")
    const res = await axiosInstance.get('/tc')
    if(res.data.success){
        return res.data.countryCount
    }
}
export async function getTopTenCounPop(){
    const res = await axiosInstance.get('/top10')
    if(res.data.success){
        return res.data.countries
    }
}



export async function getTopTenLeastPopulatedCountries(){
    const res = await axiosInstance.get('/least10')
    if(res.data.success){
        return res.data.countries
    }
}

export async function getAveragePopulation(){
    const res = await axiosInstance.get('/avg-population')
    if(res.data.success){
        return res.data.avgPopulation
    }

}

export async function getPopulationByContinent(){
    const res = await axiosInstance.get('/continent-population')
    if(res.data.success){
        return res.data.continents
    }
}

export async function getPopulationByCountry(countryName) {
    const res = await axiosInstance.get(
        `/country-population/${countryName}`
    );

    if (res.data.success) {
        return res.data.country[0];
    }
}

export async function getTotalLanguages(){
    const res =await axiosInstance.get('/total-languages')
    if(res.data.success){
        return res.data.totalLanguages
    }
}

export async function getTopTenLanguages(){
    const res = await axiosInstance.get('/top-languages')
    if(res.data.success){
        return res.data.languages
    }
}


export async function getCountriesGDPPerCapita(){
    const res = await axiosIntance.get('./gdp-per-capita')
    if(res.data.sucess){
        return res.data.countries
    }
}