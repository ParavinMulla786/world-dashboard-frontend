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


export async function getCountriesGDPPerCapita() {
    const res = await axiosInstance.get('/gdp-per-capita');

    if (res.data.success) {
        return res.data.countries;
    }

    return [];
}




export async function getAverageLifeExpectancy() {
    const res = await axiosInstance.get('/average-life-expectancy');

    if (res.data.success) {
        return res.data.avgLifeExpectancy; // MUST be array
    }

    return [];
}
export async function getTopLifeExpectancyCountries() {
    const res = await axiosInstance.get("/top-life-expectancy");

    if (res.data.success) {
        return res.data.countries;
    }

    return [];
}


 export async function getLowestLifeExpectancyCountries(){
     const res = await axiosInstance.get('/lowest-life-expectancy');
     if(res.data.success){
        return res.data.countries
     }
     return[];
}


export async function getCityByName(cityName) {
  const res = await axiosInstance.get(`/city/${cityName}`);

  if (res.data.success) {
    return res.data.city;
  }

  return null;
}

export async function getLargestCities() {
    const res = await axiosInstance.get("/largest-cities");

    if (res.data.success) {
        return res.data.cities;
    }

    return [];
}

export async function getTotalCities() {
    const res = await axiosInstance.get("/total-cities");

    if (res.data.success) {
        return res.data.totalCities;
    }

    return 0;
}

export async function getCountriesByMinPopulation(minPop) {
    const res = await axiosInstance.get(
        `/countries/population/${minPop}`
    );

    if (res.data.success) {
        return res.data.countries;
    }

    return [];
}



export async function getCountriesWithLessPopulation(maxPop) {
    const res = await axiosInstance.get(
        `/countries/population-less/${maxPop}`
    );

    if (res.data.success) {
        return res.data.countries;
    }

    return [];
}