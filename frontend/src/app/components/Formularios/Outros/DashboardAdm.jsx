import React from "react";
import { ChartPie, ChartArea, ChartBar } from "../../Main/Charts";
import { FaEdit } from "react-icons/fa";

export default function DashboardAdm() {
  let dataExemplo = [
    {
      name: "Exatas",
      Acertos: 5,
      color: "#00aced",
    },
    {
      name: "Humanas",
      Acertos: 10,
      color: "#6610f2",
    },
    {
      name: "Biológicas",
      Acertos: 20,
      color: "#513487",
    },
    
  ];
  let dataEntradas = [
    {
      name: "Total Entradas",
      Acertos: 120,
      color: "#4746B0",
    }
  ];
  let dataSimulados = [
    {
      name: "Total Simulados",
      Acertos: 200,
      color: "#513487",
    }
  ];

  return (
    <section className="dashboard">
      <h1 className="dashboard__title">Métricas</h1>
      <div className="dashboard__c">
        <div className="dashboard__c__right">
          <div className="dashboard__c__right__profile">
            <div className="dashboard__c__right__profile__p"></div>
            <div className="dashboard__c__right__profile__p__circle"></div>
            <FaEdit className="dashboard__c__right__profile__p__icon" />
            <h3 className="dashboard__c__right__profile__p__title">Vitória</h3>
          </div>
          <div className="dashboard__c__right__statistics">
            <h3 className="dashboard__c__right__statistics__title">
              Estatísticas
            </h3>
          </div>
          <div className="dashboard__c__right__statistics__datas">
            <h2 className="dashboard__c__right__statistics__datas__title">
              Bugs reportados
            </h2>
            <p className="dashboard__c__right__statistics__datas__num">45</p>
          </div>
          <div className="dashboard__c__right__statistics__datas">
            <h2 className="dashboard__c__right__statistics__datas__title">
              Permanência no sistema
            </h2>
            <p className="dashboard__c__right__statistics__datas__num">
              2:45:21
            </p>
          </div>
        </div>
        <div className="dashboard__c__left">
          <div className="dashboard__c__left__um">
            <h3 className="dashboard__c__left__um__title">
            Taxa de acertos
            </h3>
              <ChartBar data={dataExemplo} dataKey="Acertos" />
          </div>
          <div className="dashboard__c__left__dois">
            <h3 className="dashboard__c__left__dois__title">
              Entradas Diárias
            </h3>
            <ChartArea data = {[
                {
                  dia: "Seg",
                  entradas: 5,
                },
                {
                  dia: "Ter",
                  entradas: 2,
                },
                {
                  dia: "Qua",
                  entradas: 2,
                },
                {
                  dia: "Qui",
                  entradas: 8,
                },
                {
                  dia: "Sex",
                  entradas: 3,
                },
                {
                  dia: "Sab",
                  entradas: 2,
                },
                {
                  dia: "Dom",
                  entradas: 5,
                },
            ]}  keyData="entradas" keyName="dia" /* color="#513487" *//>
          </div>
          <div className="dashboard__c__left__et">
            <div className="dashboard__c__left__et__tres">
            <h3 className="dashboard__c__left__et__tres__title">
                Total de Entradas
              </h3>
            <ChartPie data={dataEntradas} dataKey="Acertos" outerRadius={90} innerRadius={65} />
            </div>
            <div className="dashboard__c__left__et__quatro">
              <h3 className="dashboard__c__left__et__quatro__title">
                Total de Simulados
              </h3>
              <ChartPie data={dataSimulados} dataKey="Acertos" outerRadius={90} innerRadius={65} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
