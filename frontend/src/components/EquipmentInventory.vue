<template>
  <div>
    <h1>Inventory List</h1>
    <table>
    </table>
    <ul>
      <li v-for="item in equipmentInventory" :key="item.id">
        {{ item.name }} || {{ item.type }} || {{ item.quantity }} || {{ item.location }} || {{ item.notes }}
      </li>
    </ul>
  </div>

  <h2>Add New Equipment</h2>
  <form @submit.prevent="addEquipment">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="type" type="text" placeholder="Type" required />
    <input v-model="quantity" type="text" placeholder="Quantity" required />
    <input v-model="location" type="text" placeholder="Location" required />
    <input v-model="notes" type="text" placeholder="Notes" required />
    <button type="submit">Add Equipment</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      equipmentInventory: [],
      name: '',
      type: '',
      quantity: 0,
      location: '',
      notes: ''
    };
  },
  created() {
      // Fetch inventory data from the backend
      axios
        .get('http://localhost:5000/api/equipmentInventory')  // Backend API endpoint
        .then((response) => {
          this.equipmentInventory = response.data;
        })
        .catch((error) => {
          console.error('There was an error fetching the inventory:', error);
        });
    },
  methods: {
    addEquipment() {
      const newEquipment = {
        name: this.name,
        type: this.type,
        quantity: this.quantity,
        location: this.location,
        notes: this.notes,
      };

      axios.post('http://localhost:5000/api/addEquipment', newEquipment)
        .then((response) => {
          alert('Equipment added successfully!');
          console.log(response.data);
        })
        .catch((error) => {
          alert('Error adding equipment.');
          console.error(error);
        });
    }
  }
};
</script>
