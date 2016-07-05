function createColorScheme(){
    var dict = {};
    dict['forground'] = {};
    dict['background'] = {};
    
    dict['background']['Antwerpen'] = '#CEC4E3';
    dict['background']['Brussel'] = '#E1F5D1';
    dict['background']['Leuven'] = '#E09B9B';
    dict['background']['temperature'] = '#FFDBBA';
    dict['background']['pressure'] = '#DDA0C3';
    dict['background']['humidity'] = '#BDD7DD';
    
    dict['forground']['Antwerpen'] = '#7C67A7';
    dict['forground']['Brussel'] = '#A6D87D';
    dict['forground']['Leuven'] = '#9A4141';
    dict['forground']['temperature'] = '#B17B49';
    dict['forground']['pressure'] = '#A4457B';
    dict['forground']['humidity'] = '#598B97';
    
    return dict;
}