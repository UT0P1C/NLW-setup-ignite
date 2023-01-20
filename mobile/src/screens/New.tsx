import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";

const availableWeekDays = [
  'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'
];

export function New () {

  const [days, setDays] = useState<number[]>([]);

  function handleToggleDay (dayIndex: number){
    if(days.includes(dayIndex)){
      setDays(prevState => prevState.filter(day => day != dayIndex));
    }else{
      setDays(prevState => [...prevState, dayIndex]);
    }
  }

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <BackButton/>

        <Text className=' mt-6 text-white font-extrabold text-3xl'>
          Criar hábito
        </Text>
        <Text className=' mt-6 text-white font-semibold text-base'>
          Qual seu comprometimento?
        </Text>

        <TextInput 
        className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-violet-600"
        placeholder="ex.: Cometer um crime hediondo"
        placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {
          availableWeekDays.map((day, i) => (
            <CheckBox
            key={day}
            title={day}
            checked={days.includes(i)}
            onPress={() => handleToggleDay(i)}
            />
          ))
        }

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6
           "
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
        
      </ScrollView>

    </View>
  );
}