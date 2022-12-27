import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Pagination from './Pagination.vue'

let wrapper: VueWrapper

function testCurrentPageButton(page: Omit<DOMWrapper<Element>, 'exists'>) {
  expect(page.classes()).toContain('btn-page--active')
  expect(page.attributes('aria-current')).toBe('true')
}

describe('Pagination', () => {
  beforeEach(() => {
    wrapper = shallowMount(Pagination, {
      props: {
        total: 200,
        rangeBefore: 2,
        rangeAfter: 2,
        'onUpdate:currentPage': (value: number) =>
          wrapper.setProps({ currentPage: value }),
      },
    }) as VueWrapper
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should go to page', async () => {
    const page = wrapper.get('[data-test="page-3"]')
    await page.trigger('click')

    expect(wrapper.emitted('change')).toEqual([[3]])

    testCurrentPageButton(page)
  })

  it('should start from currentPage value', async () => {
    await wrapper.setProps({ currentPage: 5 })

    const page = wrapper.get('[data-test="page-5"]')
    testCurrentPageButton(page)
  })

  it('should go next', async () => {
    await wrapper.setProps({ currentPage: 5 })
    const btnNext = wrapper.get('[data-test="hasNext"]')
    await btnNext.trigger('click')
    await btnNext.trigger('click')
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent).toHaveLength(2)
    expect(changeEvent?.[0]).toEqual([6])
    expect(changeEvent?.[1]).toEqual([7])

    const page = wrapper.get('[data-test="page-7"]')
    testCurrentPageButton(page)
  })

  it('should go previous', async () => {
    await wrapper.setProps({ currentPage: 5 })
    const btnPrevious = wrapper.get('[data-test="hasPrev"]')
    await btnPrevious.trigger('click')
    await btnPrevious.trigger('click')
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent).toHaveLength(2)
    expect(changeEvent?.[0]).toEqual([4])
    expect(changeEvent?.[1]).toEqual([3])

    const page = wrapper.get('[data-test="page-3"]')
    testCurrentPageButton(page)
  })

  it('should not go prev when at first page and could go to last page', async () => {
    const btnPrev = wrapper.get('[data-test="hasPrev"]')
    expect(btnPrev.attributes('disabled')).toBe('')
    // go to last page
    await wrapper.get('[data-test="hasLast"]').trigger('click')
    const page = wrapper.get('[data-test="page-10"]')
    testCurrentPageButton(page)
  })

  it('should not go next when at last page and could go to first page', async () => {
    await wrapper.setProps({ currentPage: 10 })
    const btnNext = wrapper.get('[data-test="hasNext"]')
    expect(btnNext.attributes('disabled')).toBe('')
    // go to first page
    await wrapper.get('[data-test="hasFirst"]').trigger('click')
    const page = wrapper.get('[data-test="page-1"]')
    testCurrentPageButton(page)
  })
})
