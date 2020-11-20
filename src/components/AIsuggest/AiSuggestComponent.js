import React , {Component} from 'react';
import SymptomText from './SymptomSuggestionComponent'
class AiSuggest extends Component{
    render(){
        return(
            <div>
                <SymptomText symptoms = {this.props.symptomList} id={1}/>
                <SymptomText symptoms = {this.props.symptomList} id={2}/>
                <SymptomText symptoms = {this.props.symptomList} id={3}/>
                <SymptomText symptoms = {this.props.symptomList} id={4}/>
                <SymptomText symptoms = {this.props.symptomList} id={5}/>
                <SymptomText symptoms = {this.props.symptomList} id={6}/>
                <SymptomText symptoms = {this.props.symptomList} id={7}/>
                <SymptomText symptoms = {this.props.symptomList} id={8}/>
                <SymptomText symptoms = {this.props.symptomList} id={9}/>
                <SymptomText symptoms = {this.props.symptomList} id={10}/>
            </div>
        );
    }
}

export default AiSuggest;

