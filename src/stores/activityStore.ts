import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { v4 as uuid } from 'uuid'

export interface Location {
  name?: string;
  address?: string;
}

export interface Activity {
  id?: string;
  name?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  location?: Location;
  description?: string;
  enrollmentOptions?: string[];
  participants?: string[];
}

export const useActivityStore = defineStore('activty', () => {
  const activities = ref<Activity[]>([
    {
      id: uuid(),
      name: 'Meeborrel 1',
      date: '2026-04-29',
      startTime: '20:00',
      endTime: '23:00',
      location: {
        name: 'Huize Oranje Onder',
        address: 'Calslaan 5E'
      },
      description: '',
      enrollmentOptions: [],
      participants: ['Dilan, Minke, Oliver, Rik, Lucas, Margot, Joram']
    },
    {
      id: uuid(),
      name: 'Meeborrel 2',
      date: '2026-05-06',
      startTime: '20:00',
      endTime: '23:00',
      location: {
        name: 'De Vluchte',
        address: 'Calslaan 5E'
      },
      description: '',
      enrollmentOptions: [],
      participants: ['Dilan, Minke, Oliver, Rik, Lucas, Margot, Joram']}
  ]);
  const currentId = ref<string | null>(null);

  const current = computed(() => {
    return activities.value.find(a => a.id === currentId.value);
  })

  const upcoming = computed(() => {
    return activities.value.filter(a => new Date(a.date!) > new Date()).sort((a, b) =>
    new Date(a.date!).getTime() - new Date(b.date!).getTime());
  })

  function addActivity(activity: Activity) {
    activities.value.push({
      ...activity,
      id: uuid(),
      participants: [],
      enrollmentOptions: []
    })
  }

  function addParticipant(id: string, participant: string) {
    const activity = activities.value.find(a => a.id === id);
    if (activity && !activity.participants?.includes(participant)) {
      activity.participants?.push(participant);
    }
  }

  function removeParticipant(id: string, participant: string) {
    const activity = activities.value.find(a => a.id === id);
    if (activity) {
      activity.participants = activity.participants?.filter(p => p !== participant);
    }
  }

  function setCurrent(id: string | null) {
    currentId.value = id;
  }

  function deleteActivity(id: string) {
    activities.value = activities.value.filter(a => a.id !== id);
  }

  return {
    activities,
    currentId,
    current,
    upcoming,
    addActivity,
    addParticipant,
    removeParticipant,
    setCurrent,
    deleteActivity
  }

})

