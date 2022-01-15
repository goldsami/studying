defmodule Strings do
  def check_printable(word) do
    Enum.all?(word, &(&1 in ? ..?~))
  end

  def anagram(word1, word2), do: Enum.sort(word1) == Enum.sort(word2)

  def center(words) do
    target_width = max_len(words)
    IO.puts(target_width)

    Enum.map(words, &String.ljust(&1, trunc(target_width / 2)))
    |> Enum.map(&String.rjust(&1, target_width))
    |> Enum.each(&IO.puts(&1))
  end

  defp max_len(words) do
    Enum.map(words, &String.length(&1))
    |> Enum.max()
  end

  def capitalize_sentence(str) do
    str
    |> String.split(". ")
    |> Enum.map(&String.capitalize/1)
    |> Enum.join(". ")
  end
end
