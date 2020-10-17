import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//data
import { MUSICALS } from '../data/data';
import { BALLET_OPERA } from '../data/data';
import { SHOW } from '../data/data';
import { DANCE_THEATER } from '../data/data';


export default function CategoryMenu({ handleSelectedPredstavenie }) {
    const menu = [];
    let count = 1;
    const handleOnClickSelectPredstavenie = (selectedCategory, indexPredstavenia) => {
        handleSelectedPredstavenie(selectedCategory[indexPredstavenia].category, indexPredstavenia)
    }

    function LoadAllPerformanceMenu() {

        let selectedCategory = MUSICALS;

        PreparePerformanceMenu(selectedCategory);

        selectedCategory = BALLET_OPERA;

        PreparePerformanceMenu(selectedCategory)

        selectedCategory = SHOW;

        PreparePerformanceMenu(selectedCategory);

        selectedCategory = DANCE_THEATER;

        // for (let i; i < selectedCategory.length; i++) {
        //     const indexPredstavenia = i;
        //     let positon = i;
        //     let countOfArray = selectedCategory.length;
        //     // countOfArray =selectedCategory.length - 1;
        //     while (positon != countOfArray) {
        //         if ((count === 2)) {
        //             RedMenu(selectedCategory,indexPredstavenia);
        //         } else {
        //             BlackMenu(selectedCategory,indexPredstavenia);
        //         }
        //     }

        //     if ((count === 2)) {
        //         RedMenu(selectedCategory,indexPredstavenia);
        //     } else {
        //         BlackMenu(selectedCategory,indexPredstavenia);
        //     }
        // }

        return <div className = 'allPerformaceMenu'>{menu}</div>;

    }

    function PreparePerformanceMenu(selectedCategory) {
        for (let i = 0; i < selectedCategory.length; i++) {
            const indexPredstavenia = i;

            if ((count === 2)) {
                RedMenu(selectedCategory, indexPredstavenia);
            } else {
                BlackMenu(selectedCategory, indexPredstavenia);
            }
        }
    }

    function RedMenu(selectedCategory, indexPredstavenia) {
        menu.push(<span key = {menu.length}  style={{ color: '#FF0000' }} onClick={() => handleOnClickSelectPredstavenie(selectedCategory, indexPredstavenia)}>{"/ " + selectedCategory[indexPredstavenia].name + " / "}</span>);
        count = 1;
    }

    function BlackMenu(selectedCategory, indexPredstavenia) {
        menu.push(<span key = {menu.length} onClick={() => handleOnClickSelectPredstavenie(selectedCategory, indexPredstavenia)}>{selectedCategory[indexPredstavenia].name + " "}</span>);
        count++;
    }


    return (
        <div className='container-all-performance-menu'>
            {LoadAllPerformanceMenu()}
        </div>
    );
}