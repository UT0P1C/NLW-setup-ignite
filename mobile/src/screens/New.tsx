import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";

const availableWeekDays = [
  'Domingo', 
  'Segunda-feira', 
  'Terça-feira', 
  'Quarta-feira', 
  'Quinta-feira', 
  'Sexta-feira', 
  'Sábado'
];

export function New () {

  const [ title, setTitle ] = useState('')

  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleDay (weekDayIndex: number){
    if(weekDays.includes(weekDayIndex)){
      setWeekDays(prevState => prevState.filter(weekDay => weekDay != weekDayIndex));
    }else{
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreatingNewHabit() {
    try {
      if(!title.trim() || weekDays.length === 0){
        Alert.alert('Novo hábito', 'Informe o nome do hábito e escolha os dias da semana')
      }

      await api.post('/habits', {
        title,
        weekDays
      })

      setTitle('')
      setWeekDays([])

      Alert.alert('Novo hábito', 'Novo hábito criado com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possivel criar o novo hábito')
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
        className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-600"
        placeholder="ex.: Cometer um crime hediondo"
        placeholderTextColor={colors.zinc[400]}
        onChangeText={setTitle}
        value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {
          availableWeekDays.map((day, i) => (
            <CheckBox
            key={day}
            title={day}
            checked={weekDays.includes(i)}
            onPress={() => handleToggleDay(i)}
            />
          ))
        }

        <TouchableOpacity
          onPress={handleCreatingNewHabit}
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