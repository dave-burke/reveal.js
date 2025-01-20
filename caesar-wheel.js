import { computed } from 'vue';

export default {
  name: 'CaesarWheel',
  template: `
  <div class="relative w-80 h-80">
    <!-- Outer static wheel -->
    <svg viewBox="0 0 400 400" class="w-full h-full">
      <!-- Background circle -->
      <circle cx="200" cy="100" r="85" fill="white" stroke="#333" stroke-width="2"/>

      <!-- Outer wheel letters -->
      <g>
        <template v-for="(letter, index) in outerLetters" :key="letter">
          <text
            :x="200 + 70 * Math.cos((index * 2 * Math.PI) / 26 - Math.PI/2)"
            :y="100 + 70 * Math.sin((index * 2 * Math.PI) / 26 - Math.PI/2)"
            text-anchor="middle"
            dominant-baseline="middle"
            :class="{'highlighted': letter === highlight}"
          >{{ letter }}</text>
        </template>
      </g>

      <!-- Inner rotating wheel -->
      <g :style="rotationStyle">
        <!-- Inner circle -->
        <circle cx="200" cy="100" r="60" fill="#f0f0f0" stroke="#333" stroke-width="2"/>

        <!-- Inner wheel letters -->
        <template v-for="(letter, index) in innerLetters" :key="letter">
          <text
            :x="200 + 45 * Math.cos((index * 2 * Math.PI) / 26 - Math.PI/2)"
            :y="100 + 45 * Math.sin((index * 2 * Math.PI) / 26 - Math.PI/2)"
            text-anchor="middle"
            dominant-baseline="middle"
            :class="{'highlighted': letter === highlightInner}"
          >{{ letter }}</text>
        </template>
      </g>
    </svg>
  </div>`,
  props: {
    // Rotation amount (1-26)
    shift: {
      type: Number,
      required: false,
      default: 13,
      validator: value => value >= 0
    },
    // Letter to highlight on outer wheel
    highlight: {
      type: String,
      default: null,
      validator: value => value === null || (value.length === 1 && /^[A-Z]$/.test(value))
    },
  },
  setup(props) {
    const outerLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const innerLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const highlightInner = computed(() => {
      if(props.highlight === null) {
        return null;
      }
      const outerIndex = outerLetters.indexOf(props.highlight);
      const innerIndex = 26 - ((outerIndex + props.shift) % 26);
      if(innerIndex === 26) {
        return innerLetters[0];
      }
      return innerLetters[innerIndex];
    });

    const rotationStyle = computed(() => {
      const rotation = (props.shift % 26) * (360 / 26);
      return {
        transform: `rotate(${rotation}deg)`,
        transformOrigin: '200px 100px',
        transition: 'transform 0.5s ease'
      }
    });

    return {outerLetters, innerLetters, rotationStyle, highlightInner}
  },
}

