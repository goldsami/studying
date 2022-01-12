defmodule Strings do
  def check_printable(word) do
    Enum.all?(word, &(&1 in ? ..?~))
  end

  def anagram(word1, word2), do: Enum.sort(word1) == Enum.sort(word2)
end
