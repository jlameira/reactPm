import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class MenuLateral extends Component {
  render() {
    return (
      <dl>
        <dt>Menu</dt>
        <dd><a href="javascript:void(0)" id="tiradentes-inicio" >Inicio</a></dd>
        <dt>Gerenciar</dt>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-planoAnualDeEnsino" >Plano Anual de Ensino</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-calendario">Calendário</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-matrizCurricular" >Matriz Curricular</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-matricula" >Matricular Alunos</a>
        </dd>
        <dt>Cadastro Básico</dt>
        <dd>
          <NavLink  id="tiradentes-base" >Base de Ensino</NavLink>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-nivelEnsino" >Nível de Ensino</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-serie" >Ano</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-areaConhecimento" >Área de conhecimento</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-disciplina" >Componente Curricular</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-unidade" >Escola/Unidade</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-professor" >Vincular Professor</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-aluno" >Vincular Aluno</a>
        </dd>
        <dd>
          <a href="javascript:void(0)" id="tiradentes-turma" >Turmas</a>
        </dd>
      </dl>
    );
  }
}

export default MenuLateral;
