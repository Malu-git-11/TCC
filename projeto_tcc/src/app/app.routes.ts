import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastro', component: Cadastro }
];