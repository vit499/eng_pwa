const txteng3 = [
  ["я голодный.", "I am hungry"],
  ["я хочу пить.", "I am thirsty"],
  ["я боюсь.", "I am afraid"],
  ["я удивлен.", "I am surprised"],
  ["я опаздываю.", "I am late"],
  ["я прав.", "I am right"],
  ["я ошибаюсь.", "I am wrong"], //-------------
  ["ты голодный.", "you are hungry"],
  ["ты хочешь пить.", "you are thirsty"],
  ["ты боишься.", "you are afraid"],
  ["ты удивлен.", "you are surprised"],
  ["ты опаздываешь.", "you are late"],
  ["ты прав.", "you are right"],
  ["ты ошибаешься.", "you are wrong"], //-------------
  ["он голодный.", "He is hungry"],
  ["он хочет пить.", "He is thirsty"],
  ["он боится.", "He is afraid"],
  ["он удивлен.", "He is surprised"],
  ["он опаздывает.", "He is late"],
  ["он прав.", "He is right"],
  ["он ошибается.", "He is wrong"], //-------------
  ["она голодная.", "She is hungry"],
  ["она хочет пить.", "She is thirsty"],
  ["она боится.", "She is afraid"],
  ["она удивлена.", "She is surprised"],
  ["она опаздывает.", "She is late"],
  ["она права.", "She is right"],
  ["она ошибается.", "She is wrong"], //-------------
  ["мы голодные.", "We are hungry"],
  ["мы хотим пить.", "We are thirsty"],
  ["мы боимся.", "We are afraid"],
  ["мы удивлены.", "We are surprised"],
  ["мы опаздываем.", "We are late"],
  ["мы правы.", "We are right"],
  ["мы ошибаемся.", "We are wrong"], //-------------
  ["вы голодный.", "You are hungry"],
  ["вы хотите пить.", "You are thirsty"],
  ["вы боитесь.", "You are afraid"],
  ["вы удивлены.", "You are surprised"],
  ["вы опаздываете.", "You are late"],
  ["вы правы.", "You are right"],
  ["вы ошибаетесь.", "You are wrong"], //-------------
  ["они голодные.", "They are hungry"],
  ["они хочят пить.", "They are thirsty"],
  ["они боятся.", "They are afraid"],
  ["они удивлены.", "They are surprised"],
  ["они опаздывают.", "They are late"],
  ["они правы", "They are right"],
  ["они ошибаются.", "They are wrong"], //----------------------
  ["я не голодный.", "I am not hungry"],
  ["я не хочу пить.", "I am not thirsty"],
  ["я не боюсь.", "I am not afraid"],
  ["я не удивлен.", "I am not surprised"],
  ["я не опаздываю.", "I am not late"],
  ["я не прав.", "I am not right"],
  ["я не ошибаюсь.", "I am not wrong"], //-------------
  ["ты не голодный.", "you are not hungry"],
  ["ты не хочешь пить.", "you are not thirsty"],
  ["ты не боишься.", "you are not afraid"],
  ["ты не удивлен.", "you are not surprised"],
  ["ты не опаздываешь.", "you are not late"],
  ["ты не прав.", "you are not right"],
  ["ты не ошибаешься.", "you are not wrong"], //-------------
  ["он не голодный.", "He is not hungry"],
  ["он не хочет пить.", "He is not thirsty"],
  ["он не боится.", "He is not afraid"],
  ["он не удивлен.", "He is not surprised"],
  ["он не опаздывает.", "He is not late"],
  ["он не прав.", "He is not right"],
  ["он не ошибается.", "He is not wrong"], //-------------
  ["она не голодная.", "She is not hungry"],
  ["она не хочет пить.", "She is not thirsty"],
  ["она не боится.", "She is not afraid"],
  ["она не удивлена.", "She is not surprised"],
  ["она не опаздывает.", "She is not late"],
  ["она не права.", "She is not right"],
  ["она не ошибается.", "She is not wrong"], //-------------
  ["мы не голодные.", "We are not hungry"],
  ["мы не хотим пить.", "We are not thirsty"],
  ["мы не боимся.", "We are not afraid"],
  ["мы не удивлены.", "We are not surprised"],
  ["мы не опаздываем.", "We are not late"],
  ["мы не правы.", "We are not right"],
  ["мы не ошибаемся.", "We are not wrong"], //-------------
  ["вы не голодный.", "You are not hungry"],
  ["вы не хотите пить.", "You are not thirsty"],
  ["вы не боитесь.", "You are not afraid"],
  ["вы не удивлены.", "You are not surprised"],
  ["вы не опаздываете.", "You are not late"],
  ["вы не правы.", "You are not right"],
  ["вы не ошибаетесь.", "You are not wrong"], //-------------
  ["они не голодные.", "They are not hungry"],
  ["они не хочят пить.", "They are not thirsty"],
  ["они не боятся.", "They are not afraid"],
  ["они не удивлены.", "They are not surprised"],
  ["они не опаздывают.", "They are not late"],
  ["они не правы", "They are not right"],
  ["они не ошибаются.", "They are not wrong"], //---------------------------
  ["я голодный?", "am I hungry?"],
  ["я хочу пить?", "am I thirsty?"],
  ["я боюсь?", "am I afraid?"],
  ["я удивлен?", "am I surprised?"],
  ["я опаздываю?", "am I late?"],
  ["я прав?", "am I right?"],
  ["я ошибаюсь?", "am I wrong?"], //-------------
  ["ты голодный?", "Are you hungry?"],
  ["ты хочешь пить?", "Are you thirsty?"],
  ["ты боишься?", "Are you afraid?"],
  ["ты удивлен?", "Are you surprised?"],
  ["ты опаздываешь?", "Are you late?"],
  ["ты прав?", "Are you right?"],
  ["ты ошибаешься?", "Are you wrong?"], //-------------
  ["он голодный?", "Is he hungry?"],
  ["он хочет пить?", "Is he thirsty?"],
  ["он боится?", "Is he afraid?"],
  ["он удивлен?", "Is he surprised?"],
  ["он опаздывает?", "Is he late?"],
  ["он прав?", "Is he right?"],
  ["он ошибается?", "Is he wrong?"], //-------------
  ["она голодная?", "Is she hungry?"],
  ["она хочет пить?", "Is she thirsty?"],
  ["она боится?", "Is she afraid?"],
  ["она удивлена?", "Is she surprised?"],
  ["она опаздывает?", "Is she late?"],
  ["она права?", "Is she right?"],
  ["она ошибается?", "Is she wrong?"], //-------------
  ["мы голодные?", "We are hungry?"],
  ["мы хотим пить?", "We are thirsty?"],
  ["мы боимся?", "We are afraid?"],
  ["мы удивлены?", "We are surprised?"],
  ["мы опаздываем?", "We are late?"],
  ["мы правы?", "We are right?"],
  ["мы ошибаемся?", "We are wrong?"], //-------------
  ["вы голодный?", "Are you hungry?"],
  ["вы хотите пить?", "Are you thirsty?"],
  ["вы боитесь?", "Are you afraid?"],
  ["вы удивлены?", "Are you surprised?"],
  ["вы опаздываете?", "Are you late?"],
  ["вы правы?", "Are you right?"],
  ["вы ошибаетесь?", "Are you wrong?"], //-------------
  ["они голодные?", "Are they hungry?"],
  ["они хочят пить?", "Are they thirsty?"],
  ["они боятся?", "Are they afraid?"],
  ["они удивлены?", "Are they surprised?"],
  ["они опаздывают?", "Are they late?"],
  ["они правы?", "Are they right?"],
  ["они ошибаются?", "Are they wrong?"],
  ["понятно", "got it"], //--------------------------
  ["это тяжело.", "It is hard"],
  ["это легко.", "It is easy"],
  ["это не тяжело.", "It is not hard"],
  ["это не легко.", "It is not easy"],
  ["это тяжело?", "Is it hard?"],
  ["это легко?", "Is it easy?"],
  ["тяжело в учении легко в бою.", "Train hard fight easy"],
];

export default txteng3;