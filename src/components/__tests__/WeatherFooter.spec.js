import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import WeatherFooter from "@/components/WeatherFooter.vue";

describe("WeatherFooter.vue Test", () => {
  it("renders message when component is created without slots specified", () => {
    // render the component
    const wrapper = shallowMount(WeatherFooter);

    // check that the title is rendered
    expect(wrapper.text()).toMatch("Default Footer");
  });
});
