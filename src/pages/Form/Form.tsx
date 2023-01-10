import { FC, useEffect, useState } from 'react'
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import styles from './Form.module.css';

const Form: FC = () => {
    const URL = "https://graphqlzero.almansi.me/api";

    const [companyRelations, setCompanyRelations] = useState([]);
    const [companyPositions, setCompanyPositions] = useState([]);

    const getCompanyRelation = (query:any) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ query })
        })
    };

    useEffect(() => {
        getCompanyRelation(`
            query Client {
                applicantIndividualCompanyRelations {
                    data {
                        id
                        name
                    }
                }
                
                applicantIndividualCompanyPositions {
                    data {
                        id
                        name
                    }
                }
            }`
        ).then(res => console.log(res))
    }, []);

    const arrList = [
        {id:'1', name:'Item 1'},
        {id:'2', name:'Item 2'},
        {id:'3', name:'Item 3'},
        {id:'4', name:'Item 4'},
        {id:'5', name:'Item 5'},
        {id:'6', name:'Item 6'},
        {id:'7', name:'Item 7'},
        {id:'8', name:'Item 8'},
        {id:'9', name:'Item 9'},
        {id:'10', name:'Item 10'},
    ];

    return (
        <div className={styles.container}>
            <div>
                <CustomSelect options={arrList}/>
            </div>
        </div>
    )
};

export default Form;