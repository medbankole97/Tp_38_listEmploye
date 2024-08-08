<template>
  <div>
    <ol>
      <li 
        v-for="employee in employees" 
        :key="employee.id"
        @mouseover="hover = employee.id"
        @mouseleave="hover = null"
        :class="{ hovered: hover === employee.id }"
      >
        {{ employee.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "EmployeeList",
  data() {
    return {
      hover: null,
      employees: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
        { id: 4, name: "Robert Brown" }
      ]
    };
  }
};
</script>

<style scoped>
ol {
  list-style-type: decimal;
  padding-left: 20px;
}

li {
  padding: 10px;
  cursor: pointer;
}

li.hovered {
  background-color: #f0f0f0;
}
</style>
