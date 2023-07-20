import { Request, Response } from "express";

import { Pet } from "../models/pets";
import { createMenuObjects } from "../helpers/createMenuObejcts";

export const search = (req: Request, res: Response)=> {
    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObjects(''),
        list,
        query
    })
}