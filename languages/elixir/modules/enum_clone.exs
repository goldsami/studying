defmodule EnumClone do
  def all?([], _fun), do: true

  def all?([head | tail], fun) do
    if fun.(head) do
      all?(tail, fun)
    else
      false
    end
  end

  def each([], _fun), do: :ok

  def each([head | tail], fun) do
    fun.(head)
    each(tail, fun)
  end

  def filter([], _fun), do: []

  def filter([head | tail], fun) do
    if fun.(head) do
      [head, filter(tail, fun)]
    end
  end

  def split(list, num) do
    _split([], list, num)
  end

  defp _split(front, back, 0) do
    [front, back]
  end

  defp _split(front, [head | tail], count) do
    _split(front ++ [head], tail, count - 1)
  end

  def take(list, num) do
    [head | _] = split(list, num)
    head
  end

  def flatten(list) do
    _flatten(list, [])
  end

  defp _flatten([[h | []] | tail], result) do
    _flatten([h | tail], result)
  end

  defp _flatten([[h | t] | tail], result) do
    _flatten([h, t | tail], result)
  end

  defp _flatten([head | tail], result) do
    _flatten(tail, result ++ [head])
  end

  defp _flatten([], result), do: result
end
